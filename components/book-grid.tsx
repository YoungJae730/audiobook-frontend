import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  category: string
}

interface BookGridProps {
  books: Book[]
}

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
      {books.map((book) => (
        <Link key={book.id} href={`/audiobooks/${book.id}`} className="group">
          <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-0">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {book.category}
                  </Badge>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
