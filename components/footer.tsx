import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <circle cx="10" cy="12" r="2"></circle>
                <path d="m6 12 1.5-1.5"></path>
                <path d="M12 14c-2 2-4 0-4 0"></path>
              </svg>
              <span>요약정</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              언제 어디서나 책을 들을 수 있는
              <br />
              새로운 독서 경험을 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/audiobooks" className="text-muted-foreground hover:text-primary transition-colors">
                  오디오북
                </Link>
              </li>
              <li>
                <Link href="/document-summary" className="text-muted-foreground hover:text-primary transition-colors">
                  문서요약
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  멤버십
                </Link>
              </li>
              <li>
                <Link href="/customer-service" className="text-muted-foreground hover:text-primary transition-colors">
                  고객센터
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">문의</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>상호명: 요약정 주식회사</li>
              <li>대표자: 홍길동</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>통신판매업신고: 2025-0000-00005</li>
              <li>주소: OOO도 OO시 OO구 OO로 123, 4층</li>
              <li>이메일: contact@yoyakjeong.com</li>
              <li>전화: 02-1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 요약정 주식회사. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
