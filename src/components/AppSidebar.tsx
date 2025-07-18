import {
  Briefcase,
  Building2,
  ChartArea,
  ChartNoAxesGantt,
  Check,
  Copy,
  Folder,
  HandHeart,
  Heart,
  Home,
  Inbox,
  LogOut,
  UserPlus,
  Users
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"

import SidebarHeaderElements from "./SidebarHeaderElements"
import { Separator } from "./ui/separator"
import LogoutDialog from "./LogoutDialog"
import keycloak from "@/lib/keycloak"


// Menu items.
const UserItems = [
  {
    title: "الرئيسية",
    url: "/",
    icon: Home,
  },
  {
    title: "المشكلات",
    url: "/problems",
    icon: Inbox,
  },
  {
    title: "التطوع",
    url: "/volunteering",
    icon: Users,
  },
  {
    title: "الإحصائيات",
    url: "/statistics",
    icon: ChartArea,
  },
  {
    title: "مشاركاتي",
    url: "/user-activities",
    icon: ChartNoAxesGantt
  },
  {
    title: "تسجيل الخروج",
    url: "#",
    icon: LogOut,
  },
]

const subUserItems = [
  {
    title: "الشكاوي",
    url: "/user-activities/aucations",
    icon: Folder,
  },
  // {
  //   title: "التطوع",
  //   url: "/user-activities/volunteering",
  //   icon: Heart,
  // },
  {
    title: "المساهمات",
    url: "/user-activities/contributions",
    icon: Copy,
  },
  {
    title: "التبرعات",
    url: "/user-activities/donations",
    icon: HandHeart,
  },
]

const GovItems = [
  {
    title: "الشكاوي",
    url: "/problems",
    icon: Inbox,
  },
  {
    title: "المناقصات",
    url: "/problems/auctions",
    icon: Building2,
  },
  {
    title: "الإحصائيات",
    url: "/statistics",
    icon: ChartArea,
  },
  {
    title: "الأنشطة",
    url: "#",
    icon: ChartNoAxesGantt,
  },
  {
    title: "تسجيل الخروج",
    url: "#",
    icon: LogOut,
  },
]

const subGovItems = [
  {
    title: "المنجزة",
    url: "/problems/completed",
    icon: Check,
  },
]

const AdminItems = [
  {
    title: "المشكلات",
    url: "/manage/problems",
    icon: Building2,
  },
  {
    title: "المستخدمين",
    url: "/manage/users",
    icon: Users,
  },
  {
    title: "الجهات المعنية",
    url: "/manage/govs",
    icon: Briefcase,
  },
  {
    title: "الإحصائيات",
    url: "/statistics",
    icon: ChartArea,
  },
  {
    title: "إنشاء حساب",
    url: "/manage/new-account",
    icon: UserPlus,
  },
  {
    title: "تسجيل الخروج",
    url: "#",
    icon: LogOut,
  },
]

export function AppSidebar() {

    const roles = keycloak.tokenParsed?.resource_access?.["react-client"].roles || []
    // console.log(roles);

  return (
    <Sidebar side="right">

      <SidebarContent className="overflow-x-hidden">

        <SidebarHeader className="hover:bg-gray-100 rounded-[10px]">
          <SidebarHeaderElements roles={roles}/>
        </SidebarHeader>
        
        <Separator />

        <SidebarGroup>

          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-5">
              {roles.includes("ROLE_GOV")
                ?(
                  GovItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {/* {item.title === 'الأنشطة'  */}
                      {item.title === 'الأنشطة' 
                      ?(
                        <div>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                          <SidebarMenu className="gap-5 mr-10 mt-2">
                            {subGovItems.map((subItem) => (
                              <SidebarMenuItem key={subItem.title}>
                                <SidebarMenuButton asChild>
                                  <a href={subItem.url}>
                                    <subItem.icon />
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        </div>
                      ):item.title === 'تسجيل الخروج'
                      ?(
                        <SidebarMenuButton asChild>
                          <LogoutDialog />
                        </SidebarMenuButton>
                      ):(
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )
                      }
                    </SidebarMenuItem>
                  ))
                ) : roles.includes("ROLE_ADMIN") ?(
                  AdminItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {/* {item.title === 'الأنشطة'  */}
                      {item.title === 'تسجيل الخروج'
                      ?(
                        <SidebarMenuButton asChild>
                          <LogoutDialog />
                        </SidebarMenuButton>
                      ):(
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )
                      }
                    </SidebarMenuItem>
                  ))

                ):(
                  UserItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      {/* {item.title === 'الأنشطة'  */}
                      {item.title === 'مشاركاتي' 
                      ?(
                        <div>
                          <SidebarMenuButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                          <SidebarMenu className="gap-5 mr-10 mt-2">
                          {subUserItems.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton asChild>
                              <a href={subItem.url}>
                                <subItem.icon />
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                        </div>
                      ):item.title === 'تسجيل الخروج'
                      ?(
                        <SidebarMenuButton asChild>
                          <LogoutDialog />
                        </SidebarMenuButton>
                      ):(
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      )
                      }
                    </SidebarMenuItem>
                  ))

                )
              }
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>

      </SidebarContent>

    </Sidebar>
  )
}
