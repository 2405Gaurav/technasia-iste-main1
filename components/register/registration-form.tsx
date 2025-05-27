"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, Variants } from "framer-motion";
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

// Motion variants for staggered reveal
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

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

  // Floating shapes for background with framer-motion
  const floatingShapes = [
    {
      id: "shape1",
      style: {
        top: "10%",
        left: "5%",
        width: 100,
        height: 100,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(72, 187, 120, 0.6), transparent)",
        filter: "blur(40px)",
        position: "absolute" as const,
        zIndex: 0,
      },
      animate: {
        y: [0, 20, 0],
      },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      id: "shape2",
      style: {
        bottom: "15%",
        right: "10%",
        width: 150,
        height: 150,
        borderRadius: "2rem",
        background:
          "linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(5, 150, 105, 0.4))",
        filter: "blur(50px)",
        position: "absolute" as const,
        zIndex: 0,
      },
      animate: {
        x: [0, -25, 0],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    {
      id: "shape3",
      style: {
        top: "40%",
        right: "30%",
        width: 80,
        height: 80,
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, rgba(34,197,94, 0.5), transparent)",
        filter: "blur(30px)",
        position: "absolute" as const,
        zIndex: 0,
      },
      animate: {
        y: [0, 15, 0],
      },
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative max-w-2xl mx-auto text-center py-20 px-6
          
          text-white"
      >
        {floatingShapes.map(({ id, style, animate, transition }) => (
          <motion.div
            key={id}
            style={style}
            animate={animate}
            transition={transition}
            aria-hidden="true"
          />
        ))}
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-400 drop-shadow-[0_0_6px_rgba(72,187,120,0.8)]" />
        </div>
        <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Registration Successful!
        </h2>
        <p className="text-green-200 mb-6">
          Thank you for registering for TECHNASIA&apos;25. A confirmation email has been sent to your
          registered email.
        </p>
        <Button
          asChild
          className="bg-green-500 hover:bg-green-600 shadow-green-400/50 hover:shadow-green-600/80 transition
          rounded-full font-bold text-lg"
        >
          <a href="/">Return to Homepage</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative py-12 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto
        bg-gradient-to-br 
        text-white
        rounded-lg
        overflow-hidden
        before:absolute before:inset-0 before:bg-grid-pattern before:opacity-10 before:pointer-events-none"
      style={{ minHeight: "100vh" }}
    >
      {/* Floating shapes */}
      {floatingShapes.map(({ id, style, animate, transition }) => (
        <motion.div
          key={id}
          style={style}
          animate={animate}
          transition={transition}
          aria-hidden="true"
        />
      ))}

      <div className="text-center mb-12 relative z-10">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold mb-2
            bg-gradient-to-r
            bg-clip-text text-transparent drop-shadow-lg text-white"
        >
          Register for TECHNASIA&apos;25
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-green-300 text-lg max-w-2xl mx-auto"
        >
          Join Asia&apos;s biggest tech festival. Fill out the form below to secure your spot.
        </motion.p>
      </div>

      <Card
        className="relative z-10 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-green-500/30
        hover:shadow-[0_0_20px_rgba(72,187,120,0.6)] transition-shadow duration-300"
      >
        <CardContent className="p-8">
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              noValidate
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Gaurav Sharma"
                          {...field}
                          className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="gaurav@example.com"
                          {...field}
                          className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 9876543210"
                          {...field}
                          className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Institution
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Chandigarh University"
                          {...field}
                          className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="competition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Competition
                      </FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-white/10 text-white border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300">
                            <SelectValue placeholder="Select a competition" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 text-green-400">
                            {competitions.map((comp) => (
                              <SelectItem
                                key={comp.id}
                                value={comp.id}
                                className="hover:bg-green-700 hover:text-white transition-colors"
                              >
                                {comp.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              {competition?.allowsTeam && (
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                          Team Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Team Avengers"
                            {...field}
                            className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                          Team Size
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            {...field}
                            className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamMembers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                          Team Members (Names)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Member1, Member2, ..."
                            rows={3}
                            {...field}
                            className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                            focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                            hover:border-green-500 transition-colors duration-300 resize-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-green-400 hover:text-green-500 transition-colors cursor-pointer">
                        Experience & Background
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your experience in tech or similar events"
                          rows={4}
                          {...field}
                          className="bg-white/10 text-white placeholder-green-300 border-green-400 rounded-lg
                          focus:ring-2 focus:ring-green-400 focus:ring-offset-0 focus:outline-none
                          hover:border-green-500 transition-colors duration-300 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-green-400" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <FormField
                  control={form.control}
                  name="accommodationNeeded"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-green-400 checked:bg-green-500 checked:border-green-500"
                        />
                      </FormControl>
                      <FormLabel className="font-semibold text-green-400 cursor-pointer select-none">
                        Need Accommodation?
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-3">
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-green-400 checked:bg-green-500 checked:border-green-500"
                        />
                      </FormControl>
                      <FormLabel className="text-green-300 cursor-pointer select-none">
                        I accept the{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-green-500 font-semibold"
                        >
                          terms and conditions
                        </a>
                      </FormLabel>
                    </FormItem>
                  )}
                />
                <FormMessage className="text-green-400" />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold
                  rounded-full shadow-lg
                  hover:from-green-500 hover:to-emerald-600
                  hover:shadow-[0_0_15px_rgba(72,187,120,0.9)]
                  transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Submit Registration</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
