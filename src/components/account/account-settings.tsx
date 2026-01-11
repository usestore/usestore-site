"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  emailVerified: boolean;
}

interface AccountSettingsProps {
  user: User;
}

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

const emailSchema = z.object({
  newEmail: z.string().email("Please enter a valid email address"),
});

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ProfileFormValues = z.infer<typeof profileSchema>;
type EmailFormValues = z.infer<typeof emailSchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function AccountSettings({ user }: AccountSettingsProps) {
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);

  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [signOutLoading, setSignOutLoading] = useState(false);

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name || "",
    },
  });

  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      newEmail: "",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onProfileSubmit(values: ProfileFormValues) {
    setProfileLoading(true);
    setProfileError(null);
    setProfileSuccess(false);

    try {
      const { error } = await authClient.updateUser({
        name: values.name,
      });

      if (error) {
        setProfileError(error.message || "Failed to update profile");
        return;
      }

      setProfileSuccess(true);
      setTimeout(() => setProfileSuccess(false), 3000);
    } catch (err) {
      setProfileError("Something went wrong. Please try again.");
    } finally {
      setProfileLoading(false);
    }
  }

  async function onEmailSubmit(values: EmailFormValues) {
    setEmailLoading(true);
    setEmailError(null);
    setEmailSuccess(false);

    try {
      const { error } = await authClient.changeEmail({
        newEmail: values.newEmail,
        callbackURL: "/account",
      });

      if (error) {
        setEmailError(error.message || "Failed to update email");
        return;
      }

      setEmailSuccess(true);
      emailForm.reset();
    } catch (err) {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setEmailLoading(false);
    }
  }

  async function onPasswordSubmit(values: PasswordFormValues) {
    setPasswordLoading(true);
    setPasswordError(null);
    setPasswordSuccess(false);

    try {
      const { error } = await authClient.changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
        revokeOtherSessions: true,
      });

      if (error) {
        setPasswordError(error.message || "Failed to change password");
        return;
      }

      setPasswordSuccess(true);
      passwordForm.reset();
      setTimeout(() => setPasswordSuccess(false), 3000);
    } catch (err) {
      setPasswordError("Something went wrong. Please try again.");
    } finally {
      setPasswordLoading(false);
    }
  }

  async function handleSignOut() {
    setSignOutLoading(true);
    try {
      await authClient.signOut();
      window.location.href = "/";
    } catch (err) {
      setSignOutLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      {/* Profile Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Profile</h2>
        <div className="border p-6">
          <div className="flex items-start gap-6 mb-6">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            )}
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              {user.emailVerified && (
                <span className="inline-block mt-1 text-xs text-muted-foreground">
                  Verified
                </span>
              )}
            </div>
          </div>

          <form
            onSubmit={profileForm.handleSubmit(onProfileSubmit)}
            className="space-y-4"
          >
            {profileError && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 border border-destructive/20">
                {profileError}
              </div>
            )}
            {profileSuccess && (
              <div className="bg-green-500/10 text-green-600 text-sm p-3 border border-green-500/20">
                Profile updated successfully
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...profileForm.register("name")}
                className="w-full py-2.5 px-3 border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {profileForm.formState.errors.name && (
                <p className="text-sm text-destructive">
                  {profileForm.formState.errors.name.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={profileLoading}
              className="py-2.5 px-4 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
            >
              {profileLoading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </section>

      {/* Email Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Change Email</h2>
        <div className="border p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Current email: <span className="text-foreground">{user.email}</span>
          </p>

          <form
            onSubmit={emailForm.handleSubmit(onEmailSubmit)}
            className="space-y-4"
          >
            {emailError && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 border border-destructive/20">
                {emailError}
              </div>
            )}
            {emailSuccess && (
              <div className="bg-green-500/10 text-green-600 text-sm p-3 border border-green-500/20">
                Verification email sent. Please check your inbox to confirm the
                change.
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="newEmail" className="text-sm font-medium">
                New Email
              </label>
              <input
                id="newEmail"
                type="email"
                placeholder="new-email@example.com"
                {...emailForm.register("newEmail")}
                className="w-full py-2.5 px-3 border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {emailForm.formState.errors.newEmail && (
                <p className="text-sm text-destructive">
                  {emailForm.formState.errors.newEmail.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={emailLoading}
              className="py-2.5 px-4 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
            >
              {emailLoading ? "Sending..." : "Update Email"}
            </button>
          </form>
        </div>
      </section>

      {/* Password Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Change Password</h2>
        <div className="border p-6">
          <form
            onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
            className="space-y-4"
          >
            {passwordError && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 border border-destructive/20">
                {passwordError}
              </div>
            )}
            {passwordSuccess && (
              <div className="bg-green-500/10 text-green-600 text-sm p-3 border border-green-500/20">
                Password changed successfully
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="currentPassword" className="text-sm font-medium">
                Current Password
              </label>
              <input
                id="currentPassword"
                type="password"
                {...passwordForm.register("currentPassword")}
                className="w-full py-2.5 px-3 border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {passwordForm.formState.errors.currentPassword && (
                <p className="text-sm text-destructive">
                  {passwordForm.formState.errors.currentPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="newPassword" className="text-sm font-medium">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                {...passwordForm.register("newPassword")}
                className="w-full py-2.5 px-3 border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {passwordForm.formState.errors.newPassword && (
                <p className="text-sm text-destructive">
                  {passwordForm.formState.errors.newPassword.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...passwordForm.register("confirmPassword")}
                className="w-full py-2.5 px-3 border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              {passwordForm.formState.errors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {passwordForm.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="py-2.5 px-4 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
            >
              {passwordLoading ? "Changing..." : "Change Password"}
            </button>
          </form>
        </div>
      </section>

      {/* Sign Out Section */}
      <section>
        <h2 className="text-lg font-medium mb-4">Sign Out</h2>
        <div className="border p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Sign out of your account on this device.
          </p>
          <button
            onClick={handleSignOut}
            disabled={signOutLoading}
            className="py-2.5 px-4 border border-input text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:pointer-events-none"
          >
            {signOutLoading ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </section>
    </div>
  );
}
