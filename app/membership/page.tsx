import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function MembershipPage() {
  const plans = [
    {
      name: "베이직",
      price: "9,900",
      description: "기본적인 오디오북과 문서 요약 기능을 이용하세요.",
      features: ["월 5권 오디오북 이용", "월 10회 문서 요약", "기본 TTS 음성", "모바일 앱 이용", "광고 포함"],
      buttonText: "베이직 시작하기",
      popular: false,
    },
    {
      name: "프리미엄",
      price: "14,900",
      description: "더 많은 콘텐츠와 고급 기능을 이용하세요.",
      features: [
        "무제한 오디오북 이용",
        "월 30회 문서 요약",
        "고품질 TTS 음성",
        "모든 기기에서 이용",
        "광고 없음",
        "오프라인 다운로드",
      ],
      buttonText: "프리미엄 시작하기",
      popular: true,
    },
    {
      name: "비즈니스",
      price: "29,900",
      description: "팀과 함께 사용하는 비즈니스 솔루션입니다.",
      features: [
        "무제한 오디오북 이용",
        "무제한 문서 요약",
        "최고급 TTS 음성",
        "모든 기기에서 이용",
        "광고 없음",
        "오프라인 다운로드",
        "팀원 5명 계정",
        "전용 고객 지원",
      ],
      buttonText: "비즈니스 시작하기",
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">멤버십 플랜</h1>
            <p className="text-xl text-muted-foreground">
              나에게 맞는 멤버십을 선택하고 요약정의 모든 기능을 경험해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    인기 플랜
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">₩{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/월</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`}>{plan.buttonText}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">자주 묻는 질문</h2>
            <div className="space-y-6 text-left">
              <div>
                <h3 className="font-medium mb-2">멤버십은 언제든지 변경할 수 있나요?</h3>
                <p className="text-muted-foreground">
                  네, 언제든지 멤버십을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 다음 결제 주기부터
                  적용됩니다.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">무료 체험 기간이 있나요?</h3>
                <p className="text-muted-foreground">
                  모든 신규 회원에게는 7일간의 무료 체험 기간을 제공합니다. 이 기간 동안 프리미엄 기능을 모두 이용해볼
                  수 있습니다.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">환불 정책은 어떻게 되나요?</h3>
                <p className="text-muted-foreground">
                  결제 후 7일 이내에 요청하시면 전액 환불해 드립니다. 자세한 내용은 고객센터로 문의해 주세요.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">비즈니스 플랜에 더 많은 팀원을 추가할 수 있나요?</h3>
                <p className="text-muted-foreground">
                  네, 비즈니스 플랜에서는 추가 비용으로 더 많은 팀원을 초대할 수 있습니다. 팀원 1명당 월 5,000원의 추가
                  비용이 발생합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
