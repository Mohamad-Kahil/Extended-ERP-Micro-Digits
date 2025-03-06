import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Forgot password data:", data);
    // In a real app, you would send a password reset email here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-cyan-500"
        >
          <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-3.5" />
          <path d="M14 11h8" />
          <path d="M18 15h4" />
          <path d="M18 7h4" />
        </svg>
        <h2 className="text-xl font-bold">Check your email</h2>
        <p className="text-muted-foreground">
          We've sent a password reset link to your email address.
        </p>
        <Button
          className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700"
          onClick={() => navigate("/login")}
        >
          Back to login
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Forgot password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700"
          >
            Send reset link
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        <a href="/login" className="text-cyan-500 hover:text-cyan-600">
          Back to login
        </a>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
