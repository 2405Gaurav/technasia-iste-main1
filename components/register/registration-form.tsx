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
  termsAccepted: z.boolean().refine(val => val === true, {
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
  const competition = competitions.find(
    (comp) => comp.id === selectedCompetition
  );

  function onSubmit(data: FormValues) {
    // In a real application, you would submit this data to your server
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
          Thank you for registering for TECHNASIA&apos;25. We have sent a confirmation email to your registered email address with further details.
        </p>
        <Button asChild>
          <a href="/">Return to Homepage</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Register for TECHNASIA&apos;25</h1>
          <p className="text-muted-foreground">
            Join us for Asia&apos;s biggest tech festival. Fill out the form below to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                          <Input
                            type="email"
                            placeholder="john.doe@example.com"
                            {...field}
                          />
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
                          <Input placeholder="+1 234 567 8900" {...field} />
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
                          <Input
                            placeholder="University or Company"
                            {...field}
                          />
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
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                      <FormDescription>
                        Select the competition you want to participate in
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedCompetition && competition && (
                  <>
                    {competition.teamSize !== "Individual" && (
                      <>
                        <FormField
                          control={form.control}
                          name="teamName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Team Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your team's name"
                                  {...field}
                                />
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
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Number of team members" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {competition.teamSize === "2-4 members"
                                    ? [2, 3, 4].map((size) => (
                                        <SelectItem
                                          key={size}
                                          value={size.toString()}
                                        >
                                          {size} members
                                        </SelectItem>
                                      ))
                                    : competition.teamSize === "1-2 members"
                                    ? [1, 2].map((size) => (
                                        <SelectItem
                                          key={size}
                                          value={size.toString()}
                                        >
                                          {size} {size === 1 ? "member" : "members"}
                                        </SelectItem>
                                      ))
                                    : competition.teamSize === "1-3 members"
                                    ? [1, 2, 3].map((size) => (
                                        <SelectItem
                                          key={size}
                                          value={size.toString()}
                                        >
                                          {size} {size === 1 ? "member" : "members"}
                                        </SelectItem>
                                      ))
                                    : competition.teamSize === "1-4 members"
                                    ? [1, 2, 3, 4].map((size) => (
                                        <SelectItem
                                          key={size}
                                          value={size.toString()}
                                        >
                                          {size} {size === 1 ? "member" : "members"}
                                        </SelectItem>
                                      ))
                                    : null}
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
                                Enter each team member&apos;s name and email, separated by
                                commas
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </>
                )}

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant Experience</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your relevant experience or skills for this competition"
                          className="min-h-[120px]"
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
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Accommodation Assistance</FormLabel>
                        <FormDescription>
                          Check this if you need information about accommodation options
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Terms and Conditions</FormLabel>
                        <FormDescription>
                          I agree to the{" "}
                          <a
                            href="/terms"
                            className="text-primary hover:underline"
                          >
                            terms and conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            privacy policy
                          </a>
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Registration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-0 bg-card/70 backdrop-blur-sm sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Registration Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Registration Deadline:</strong> March 1, 2025
                  </p>
                  <p>
                    <strong>Registration Fee:</strong> Free for general admission. Some competitions may have a nominal fee.
                  </p>
                  <p>
                    <strong>Confirmation:</strong> You will receive a confirmation email with further details after registration.
                  </p>
                  <p>
                    <strong>Team Registration:</strong> For team competitions, only one team member needs to register the entire team.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-muted">
                  <h4 className="font-medium mb-3">Need Help?</h4>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions or need assistance with registration, please contact our support team.
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:registration@technasia.com"
                      className="text-primary hover:underline"
                    >
                      registration@technasia.com
                    </a>
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}