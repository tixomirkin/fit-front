import {createFileRoute, Link} from '@tanstack/react-router'
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {getClient} from "@/api/clients.ts";
import {ClientInfo} from "@/components/clients/client-info.tsx";

export const Route = createFileRoute('/_app/clients/$clientId/')({
  component: ClientPage,
})

function ClientPage() {
    const { clientId } = Route.useParams()
    const projectId = 1

    const {data, isLoading} = useQuery({
        queryKey: ['clients', projectId, clientId],
        queryFn: async () => getClient(projectId, parseInt(clientId)),
    })

    // const {data, isPending, isFetching, isLoading} = useQuery({
    //     queryKey: ['clients', projectId, clientId],
    //     queryFn: async () => getClients(projectId, clientId),
    //     placeholderData: (previousData) => previousData,
    // })

  return <>
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
                  <BreadcrumbPage>{data ? data.name : projectId}</BreadcrumbPage>
              </BreadcrumbItem>
          </BreadcrumbList>
      </HeaderWithBreadcrums>

      <main className="w-full">
          <div className="p-4 flex gap-1">
              <Link to='/clients'> <Button variant='outline' size='icon'><ChevronLeft/></Button></Link> <h1 className="text-2xl font-semibold">Клиент</h1>
          </div>
          <div className="px-4">
                <ClientInfo client={data}/>
          </div>

      </main>
  </>
}
