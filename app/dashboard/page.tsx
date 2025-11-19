"use client";

import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import {
  Activity,
  Users,
  CreditCard,
  Settings,
  TrendingUp,
  BarChart3,
  Calendar,
  Bell,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/signin");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-primary h-32 w-32 animate-spin rounded-full border-b-2"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+19%",
      changeType: "positive",
      icon: CreditCard,
    },
    {
      title: "Active Now",
      value: "573",
      change: "+201",
      changeType: "positive",
      icon: Activity,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New user signed up",
      description: "John Doe created an account",
      time: "2 minutes ago",
      type: "user",
    },
    {
      id: 2,
      action: "Payment received",
      description: "Invoice #1234 was paid",
      time: "1 hour ago",
      type: "payment",
    },
    {
      id: 3,
      action: "Feature updated",
      description: "Dashboard analytics improved",
      time: "3 hours ago",
      type: "update",
    },
    {
      id: 4,
      action: "Support ticket",
      description: "New ticket #5678 opened",
      time: "5 hours ago",
      type: "support",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-muted/20 min-h-screen">
      {/* Header */}
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {user.name || user.email}
            </span>
            !
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.title} variants={item}>
              <Card className="hover:shadow-md transition-all hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="text-muted-foreground h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-muted-foreground text-xs">
                    <span
                      className={
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {stat.change}
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-4"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  You have 3 new notifications today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center"
                    >
                      <div className="bg-primary/20 text-primary mr-4 flex h-9 w-9 items-center justify-center rounded-full">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.action}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {activity.description}
                        </p>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-3"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Get things done faster with these shortcuts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start group" asChild>
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="mr-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                    View Analytics
                  </Link>
                </Button>
                <Button
                  className="w-full justify-start group"
                  variant="outline"
                  asChild
                >
                  <Link href="/dashboard/users">
                    <Users className="mr-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                    Manage Users
                  </Link>
                </Button>
                <Button
                  className="w-full justify-start group"
                  variant="outline"
                  asChild
                >
                  <Link href="/dashboard/billing">
                    <CreditCard className="mr-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                    Billing & Plans
                  </Link>
                </Button>
                <Button
                  className="w-full justify-start group"
                  variant="outline"
                  asChild
                >
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                    Account Settings
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Your calendar for the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Team Meeting</p>
                    <p className="text-muted-foreground text-xs">
                      Tomorrow at 10:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Product Demo</p>
                    <p className="text-muted-foreground text-xs">
                      Friday at 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current system performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Response Time</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">45ms</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uptime</span>
                  <Badge variant="default" className="bg-cyan-500 hover:bg-cyan-600">99.9%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Sessions</span>
                  <Badge variant="outline">1,234</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Key metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Page Views</span>
                  <span className="text-sm font-medium">12,345</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Conversion Rate</span>
                  <span className="text-sm font-medium">3.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg. Session</span>
                  <span className="text-sm font-medium">2m 34s</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
