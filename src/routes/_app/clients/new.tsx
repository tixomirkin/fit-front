import {createFileRoute, Link} from '@tanstack/react-router'
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";
import ClientsTable from "@/components/clients/table.tsx";
import {NewClientFrom} from "@/components/clients/new-client-from.tsx";

export const Route = createFileRoute('/_app/clients/new')({
  component: NewClientPage,
})

function NewClientPage() {
    const projectId = 1

  return (
      <>
          <HeaderWithBreadcrums>
              <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink asChild>
                          <Link to="/">
                              Главная
                          </Link>
                      </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block"/>
                  <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink asChild>
                          <Link to="/clients">
                              Клиенты
                          </Link>
                      </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block"/>
                  <BreadcrumbItem>
                      <BreadcrumbPage>Новый клиент</BreadcrumbPage>
                  </BreadcrumbItem>
              </BreadcrumbList>
          </HeaderWithBreadcrums>

          <main className="w-full p-4 flex gap-6 flex-col">
              <h1 className="text-2xl font-semibold">Добавление нового клиента</h1>
              <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <NewClientFrom projectId={projectId} />
                  </div>

              </div>

          </main>

      </>
  )
}
