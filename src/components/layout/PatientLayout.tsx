import { NavLink, Outlet } from "react-router-dom";
import { Home, FileText, ShieldCheck, Headphones } from "lucide-react";
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
} from "@/components/ui/sidebar";
import { AppHeader } from "./AppHeader";

export default function PatientLayout() {
  const items = [
    { title: "Dashboard", url: "/patient", icon: Home },
    { title: "My Health Summary", url: "/patient/summary", icon: Headphones },
    { title: "Medical Records", url: "/patient/records", icon: FileText },
    { title: "Consent Management", url: "/patient/consent", icon: ShieldCheck },
  ];

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar collapsible="offcanvas">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Patient</SidebarGroupLabel>
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
