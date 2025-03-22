import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/dis')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dis"!</div>
}
