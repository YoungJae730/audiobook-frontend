import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookGrid } from "@/components/book-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Clock, Star } from "lucide-react"

export default function AudiobooksPage() {
  // Sample audiobook data
  const audiobooks = [
    {
      id: 1,
      title: "여름의 끝",
      author: "김영하",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 2,
      title: "사피엔스",
      author: "유발 하라리",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "역사",
    },
    {
      id: 3,
      title: "아몬드",
      author: "손원평",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 4,
      title: "공정하다는 착각",
      author: "마이클 샌델",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "철학",
    },
    {
      id: 5,
      title: "달러구트 꿈 백화점",
      author: "이미예",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 6,
      title: "부의 추월차선",
      author: "엠제이 드마코",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "자기계발",
    },
    {
      id: 7,
      title: "어떻게 살 것인가",
      author: "유시민",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "에세이",
    },
    {
      id: 8,
      title: "미라클 모닝",
      author: "할 엘로드",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "자기계발",
    },
    {
      id: 9,
      title: "1984",
      author: "조지 오웰",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 10,
      title: "데미안",
      author: "헤르만 헤세",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 11,
      title: "인간 실격",
      author: "다자이 오사무",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 12,
      title: "나미야 잡화점의 기적",
      author: "히가시노 게이고",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 13,
      title: "해리 포터와 마법사의 돌",
      author: "J.K. 롤링",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "판타지",
    },
    {
      id: 14,
      title: "어린 왕자",
      author: "생텍쥐페리",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 15,
      title: "죽음의 수용소에서",
      author: "빅터 프랭클",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "에세이",
    },
    {
      id: 16,
      title: "호밀밭의 파수꾼",
      author: "J.D. 샐린저",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 17,
      title: "동물농장",
      author: "조지 오웰",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
    {
      id: 18,
      title: "모순",
      author: "양귀자",
      coverImage: "/placeholder.svg?height=400&width=300",
      category: "소설",
    },
  ]

  // Categories
  const categories = ["전체", "소설", "자기계발", "역사", "철학", "에세이", "판타지", "경제", "과학"]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">오디오북</h1>
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="오디오북 검색..." className="pl-9" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">카테고리</h3>
              <div className="space-y-1.5">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "전체" ? "default" : "ghost"}
                    className="justify-start w-full font-normal"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">정렬</h3>
              <div className="space-y-1.5">
                <Button variant="ghost" className="justify-start w-full font-normal" size="sm">
                  <Star className="mr-2 h-4 w-4" />
                  인기순
                </Button>
                <Button variant="ghost" className="justify-start w-full font-normal" size="sm">
                  <Clock className="mr-2 h-4 w-4" />
                  최신순
                </Button>
                <Button variant="ghost" className="justify-start w-full font-normal" size="sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  제목순
                </Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="popular">인기</TabsTrigger>
                <TabsTrigger value="new">신작</TabsTrigger>
                <TabsTrigger value="recommended">추천</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <BookGrid books={audiobooks} />
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <BookGrid books={audiobooks.slice(0, 12)} />
              </TabsContent>

              <TabsContent value="new" className="mt-0">
                <BookGrid books={audiobooks.slice(6, 18)} />
              </TabsContent>

              <TabsContent value="recommended" className="mt-0">
                <BookGrid books={audiobooks.slice(3, 15)} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
