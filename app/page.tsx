import prisma from "@/prisma/db";

export default async function Home() {
  const task = await prisma.task.findMany()
  console.log(task)
  return (
    <div>
      <div>fastest task manager on earth</div>
    </div>
  );
}
