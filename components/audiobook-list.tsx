"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample audiobook data
const audiobooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    narrator: "Jake Gyllenhaal",
    duration: "4h 49m",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Classics",
    featured: true,
    new: false,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    narrator: "James Clear",
    duration: "5h 35m",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Self-Development",
    featured: true,
    new: false,
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    narrator: "Ray Porter",
    duration: "16h 10m",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Sci-Fi",
    featured: false,
    new: true,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    narrator: "Chris Hill",
    duration: "5h 48m",
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Finance",
    featured: false,
    new: true,
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    narrator: "Scott Brick",
    duration: "21h 2m",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Sci-Fi",
    featured: true,
    new: false,
  },
  {
    id: 6,
    title: "The Midnight Library",
    author: "Matt Haig",
    narrator: "Carey Mulligan",
    duration: "8h 50m",
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=300",
    genre: "Fiction",
    featured: false,
    new: true,
  },
]

export function AudiobookList() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Audiobooks</h1>
        <Button variant="outline">View All</Button>
      </div>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="new">New Releases</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiobooks
              .filter((book) => book.featured)
              .map((book) => (
                <AudiobookCard key={book.id} book={book} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiobooks
              .filter((book) => book.new)
              .map((book) => (
                <AudiobookCard key={book.id} book={book} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiobooks.slice(0, 3).map((book) => (
              <AudiobookCard key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <h2 className="text-2xl font-bold mt-8">Recommended For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiobooks.slice(0, 6).map((book) => (
          <AudiobookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

function AudiobookCard({ book }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={book.image || "/placeholder.svg"}
            alt={book.title}
            width={300}
            height={400}
            className="w-full h-[220px] object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="font-medium">
              {book.genre}
            </Badge>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-bold line-clamp-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground">By {book.author}</p>
          <p className="text-xs text-muted-foreground">Narrated by {book.narrator}</p>
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{book.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{book.duration}</span>
            </div>
          </div>
          <Button className="w-full mt-2">Play Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
