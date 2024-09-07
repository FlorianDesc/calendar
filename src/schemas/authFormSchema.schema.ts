import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(1, "Le nom d'utilisateur est obligatoire.")
      .max(100),
    email: z
      .string()
      .min(1, "L'adresse email est obligatoire.")
      .email("L'adresse email est invalide."),
    password: z
      .string()
      .min(1, "Le mot de passe est obligatoire.")
      .min(8, "Votre mot de passe doit contenir au moins 8 caractères."),
    confirmPassword: z
      .string()
      .min(1, "La confirmation du mot de passe est obligatoire."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les mots de passe ne correspondent pas.",
  });

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, "L'adresse email est obligatoire.")
    .email("L'adresse email est invalide."),
  password: z
    .string()
    .min(1, "Le mot de passe est obligatoire.")
    .min(8, "Votre mot de passe doit contenir au moins 8 caractères."),
});
