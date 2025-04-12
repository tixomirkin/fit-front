import { createFileRoute } from '@tanstack/react-router'
import {
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb.tsx";
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {useAuth} from "@/hooks/use-auth.ts";

export const Route = createFileRoute('/_app/')({
  component: Index,
})

function Index() {

    useAuth()

  return (
      <>
      <HeaderWithBreadcrums>
          <BreadcrumbList>
              {/*<BreadcrumbItem className="hidden md:block">*/}
              {/*    <BreadcrumbLink href="#">*/}
              {/*        FitCrm*/}
              {/*    </BreadcrumbLink>*/}
              {/*</BreadcrumbItem>*/}
              {/*<BreadcrumbSeparator className="hidden md:block"/>*/}
              <BreadcrumbItem>
                  <BreadcrumbPage>Главная</BreadcrumbPage>
              </BreadcrumbItem>
          </BreadcrumbList>
      </HeaderWithBreadcrums>
    <main className="w-full">
        <div className="p-2 flex gap-1">
            Hello from Inbox!
        </div>
    </main>
      </>
)
}