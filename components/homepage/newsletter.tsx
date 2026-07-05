"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-xl px-6 py-12 text-center md:px-16 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-900" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent/10" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{newsletter.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-white/80">{newsletter.description}</p>
            {submitted ? (
              <p className="mt-8 text-sm font-medium text-accent">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-white/20 bg-white/10 text-white placeholder:text-white/50 backdrop-blur-sm"
                />
                <Button type="submit" size="lg" variant="accent" className="shrink-0">
                  {newsletter.buttonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
