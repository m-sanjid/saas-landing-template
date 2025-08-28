"use client";

import type * as React from "react";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)."),
  // honeypot
  website: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    const parsed = FormSchema.safeParse(data);
    if (!parsed.success) {
      const firstErr = Object.values(
        parsed.error.flatten().fieldErrors,
      ).flat()[0];
      setStatus({
        type: "error",
        message: firstErr || "Please check the form fields.",
      });
      return;
    }
    // honeypot check
    if (data.website) {
      setStatus({
        type: "success",
        message: "Thanks! Your message has been received.",
      });
      // silently succeed to bots
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");

      setStatus({
        type: "success",
        message: "Thanks! We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "Your message was delivered successfully.",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Could not send your message.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-xl space-y-5"
      aria-describedby="contact-helper"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-required="true"
        />
      </div>
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <p id="contact-helper" className="text-muted-foreground text-sm">
        We’ll use your info only to respond to your inquiry. No spam, ever.
      </p>

      <div aria-live="polite" className="min-h-10">
        {status?.type === "success" ? (
          <Alert variant="default">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        ) : status?.type === "error" ? (
          <Alert variant="destructive">
            <AlertTitle>There was a problem</AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        ) : null}
      </div>

      <Button type="submit" disabled={submitting} className="w-full md:w-auto">
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
