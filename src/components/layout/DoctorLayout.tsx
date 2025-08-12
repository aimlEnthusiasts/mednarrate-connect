import { NavLink, Outlet } from "react-router-dom";
import { Stethoscope, FileText, ShieldCheck, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppHeader } from "./AppHeader";

export default function DoctorLayout() {
  const items = [
    { title: "Dashboard", url: "/doctor", icon: Home },
    { title: "Start Consultation", url: "/doctor/consultation", icon: Stethoscope },
    { title: "Patient History", url: "/doctor/history", icon: FileText },
    { title: "Consent Status", url: "/doctor/consent", icon: ShieldCheck },
  ];

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar collapsible="offcanvas" className="">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Doctor</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink to={item.url} end className={({ isActive }) => (isActive ? "bg-sidebar-accent font-medium" : "") }>
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <AppHeader />
          <div className="container mx-auto p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
