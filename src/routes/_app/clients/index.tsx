import {createFileRoute, Link} from '@tanstack/react-router'
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import ClientsTable from "@/components/clients/table.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";

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
                  Главная
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block"/>
            <BreadcrumbItem>
              <BreadcrumbPage>Клиенты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </HeaderWithBreadcrums>

        <main className="w-full p-4 flex gap-6 flex-col">
          <h1 className="text-2xl font-semibold">Список клиентов</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input placeholder='Поиск по имени' disabled/>
              <Link to='/clients/new'>
                <Button><Plus/><span className='hidden sm:block'>Новый клиент</span></Button>
              </Link>
            </div>
            <ClientsTable projectId={projectId} />
          </div>

        </main>

      </>
  )
}
