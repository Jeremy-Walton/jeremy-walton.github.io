import { Button } from "@/components/ui/button"
import { DotsThreeVerticalIcon } from '@phosphor-icons/react'

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button size="sm">Click me</Button>
      <Button size="md">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button active>Click me</Button>
      <Button leadingIcon={DotsThreeVerticalIcon} trailingIcon={DotsThreeVerticalIcon}>Click me</Button>
    </>
  )
}

export default App
