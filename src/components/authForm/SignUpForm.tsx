"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "@/schemas/authFormSchema.schema";
import { SignUpType } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [error, setError] = useState<string | null>();
  const router = useRouter();
  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpType) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      router.push("/sign-in");
    } else {
      if (response.status === 409) {
        setError("nom d'utilisateur ou email déja enregistrés");
      }
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-start px-4">
      <div className="w-full max-w-md rounded-lg bg-background p-8">
        <h1 className="text-center text-2xl font-bold text-primary">
          S&apos;inscrire
        </h1>
        <p className="mb-6 text-center text-sm text-primary">
          Remplissez le formulaire ci-dessous pour vous inscrire
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d&apos;utilisateur</FormLabel>
                  <FormControl>
                    <Input placeholder="ton nom d'utilisateur" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="mail@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="mot de passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="confirmez votre mot de passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <p className="mb-4 text-center text-sm text-red-600">{error}</p>
            )}

            <Button
              type="submit"
              className="mt-4 w-full bg-primary py-2 text-background">
              S&apos;inscrire
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
