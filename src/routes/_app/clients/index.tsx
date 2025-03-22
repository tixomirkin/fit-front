import {createFileRoute, Link} from '@tanstack/react-router'
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useQuery} from "@tanstack/react-query";
import {getClients} from "@/api/clients.ts";
import ClientsTable from "@/components/clients/table.tsx";

export const Route = createFileRoute('/_app/clients/')({
  component: ClientsPage,
})

function ClientsPage() {

  const projectId = 1


  return (
      <>
        <HeaderWithBreadcrums>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link to="/">
                  AppleStudio
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block"/>
            <BreadcrumbItem>
              <BreadcrumbPage>Клиенты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </HeaderWithBreadcrums>

        <main className="w-full">
          <div className="p-4 flex gap-1">
            <h1 className="text-2xl font-semibold">Список клиентов</h1>
          </div>
          <ClientsTable projectId={projectId} />
        </main>

      </>
  )
}
