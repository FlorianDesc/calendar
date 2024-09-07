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
import { SignInSchema } from "@/schemas/authFormSchema.schema";
import { SignInType } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInType) => {
    const signInData = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (signInData?.error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-start px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <h1 className="text-center text-2xl font-bold text-primary">
          Se connecter
        </h1>
        <p className="mb-6 text-center text-sm text-primary">
          Entrez votre email ci-dessous pour vous connecter
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      {...field}
                    />
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

            {error && (
              <p className="mb-4 text-center text-sm text-red-600">{error}</p>
            )}

            <Button
              type="submit"
              className="mt-4 w-full bg-primary py-2 text-white">
              Se connecter
            </Button>
            <p className="text-center text-sm text-primary/50">
              Vous n&apos;avez pas de compte ?{" "}
              <Link className="text-primary hover:underline" href="/sign-up">
                S&apos;inscrire ici
              </Link>
            </p>
          </form>
        </Form>

        <div className="my-6 flex items-center justify-center">
          <span className="w-1/5 border-b border-primary lg:w-1/4"></span>
          <span className="px-2 text-xs uppercase text-primary/50">
            ou continuer avec
          </span>
          <span className="w-1/5 border-b border-primary lg:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;