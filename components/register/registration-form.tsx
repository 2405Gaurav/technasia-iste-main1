"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { competitions } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  institution: z.string().min(2, {
    message: "Institution name must be at least 2 characters.",
  }),
  competition: z.string().min(1, {
    message: "Please select a competition.",
  }),
  teamName: z.string().optional(),
  teamSize: z.string().optional(),
  teamMembers: z.string().optional(),
  experience: z.string().min(10, {
    message: "Please provide at least 10 characters about your experience.",
  }),
  accommodationNeeded: z.boolean().default(false),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      institution: "",
      competition: "",
      teamName: "",
      teamSize: "",
      teamMembers: "",
      experience: "",
      accommodationNeeded: false,
      termsAccepted: false,
    },
  });

  const selectedCompetition = form.watch("competition");
  const competition = competitions.find((comp) => comp.id === selectedCompetition);

  function onSubmit(data: FormValues) {
    console.log(data);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center py-12"
      >
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for registering for TECHNASIA&apos;25. We have sent a confirmation email to your
          registered email address with further details.
        </p>
        <Button asChild>
          <a href="/">Return to Homepage</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="py-12 flex justify-center">
      <div className="container justify-center ">
        <div className="text-center max-w-3xl mx-auto mb-12 justify-center">
          <h1 className="text-4xl font-bold mb-4 justify-center">Register for TECHNASIA&apos;25</h1>
          <p className="text-muted-foreground">
            Join us for Asia&apos;s biggest tech festival. Fill out the form below to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Gaura---" {...field} />
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
                          <Input type="email" placeholder="modi.trump@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 9192----" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution/Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="University or Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="competition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Competition</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a competition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {competitions.map((comp) => (
                            <SelectItem key={comp.id} value={comp.id}>
                              {comp.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>Select the competition you want to participate in</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedCompetition && competition && competition.teamSize !== "Individual" && (
                  <>
                    <FormField
                      control={form.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your team's name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ""}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Number of team members" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {(competition.teamSize === "2-4 members"
                                ? [2, 3, 4]
                                : competition.teamSize === "1-2 members"
                                ? [1, 2]
                                : competition.teamSize === "1-3 members"
                                ? [1, 2, 3]
                                : competition.teamSize === "1-4 members"
                                ? [1, 2, 3, 4]
                                : []
                              ).map((size) => (
                                <SelectItem key={size} value={size.toString()}>
                                  {size} {size === 1 ? "member" : "members"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="teamMembers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Members</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List the names and emails of your team members (one per line)"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please provide names and emails of your teammates.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Experience</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your experience relevant to the competition"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accommodationNeeded"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Accommodation Needed</FormLabel>
                        <FormDescription>
                          Check if you require accommodation during the event.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel>
                        I accept the{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4"
                        >
                          terms and conditions
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-2"
                  disabled={form.formState.isSubmitting}
                >
                  Register
                  <ArrowRight />
                </Button>
              </form>
            </Form>
          </div>

          <Card className="hidden lg:block max-h-[600px] overflow-y-auto sticky top-24">
            <CardContent className="p-8 space-y-6">
              {selectedCompetition && competition ? (
                <>
                  <h3 className="text-2xl font-bold">{competition.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{competition.description}</p>
                </>
              ) : (
                <p className="text-muted-foreground">
                  Select a competition to see the details here.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
