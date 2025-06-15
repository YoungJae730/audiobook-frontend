"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Check, X } from "lucide-react"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    membership: 1, // 기본값: 베이직 멤버십
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    hasNumber: false,
    hasLetter: false,
  })

  const membershipOptions = [
    { value: 1, label: "베이직", description: "월 5권 오디오북, 월 10회 문서 요약" },
    { value: 2, label: "프리미엄", description: "무제한 오디오북, 월 30회 문서 요약" },
    { value: 3, label: "비즈니스", description: "무제한 오디오북, 무제한 문서 요약" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "membership" ? Number.parseInt(value) : value,
    }))

    // 비밀번호 유효성 검사
    if (name === "password") {
      setPasswordValidation({
        length: value.length >= 8 && value.length <= 20,
        hasNumber: /\d/.test(value),
        hasLetter: /[a-zA-Z]/.test(value),
      })
    }
  }

  const isPasswordValid = passwordValidation.length && passwordValidation.hasNumber && passwordValidation.hasLetter
  const isFormValid =
    formData.userId.length >= 4 &&
    formData.userId.length <= 20 &&
    isPasswordValid &&
    formData.password === formData.confirmPassword

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsLoading(true)

    // 실제로는 API 호출을 통해 회원가입 처리
    try {
      console.log("회원가입 데이터:", {
        user_id: formData.userId,
        user_password: formData.password,
        membership: formData.membership,
      })
      // 회원가입 로직 구현
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 시뮬레이션
      alert("회원가입이 완료되었습니다!")
    } catch (error) {
      alert("회원가입에 실패했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
            <CardDescription>요약정 계정을 만들어 시작하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="userId" className="text-sm font-medium">
                  아이디 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="userId"
                  name="userId"
                  type="text"
                  placeholder="4-20자의 아이디를 입력하세요"
                  value={formData.userId}
                  onChange={handleInputChange}
                  required
                  minLength={4}
                  maxLength={20}
                />
                {formData.userId && (
                  <p
                    className={`text-xs ${
                      formData.userId.length >= 4 && formData.userId.length <= 20 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {formData.userId.length >= 4 && formData.userId.length <= 20
                      ? "사용 가능한 아이디입니다"
                      : "4-20자 사이로 입력해주세요"}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  비밀번호 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="8-20자의 비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    maxLength={20}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      {passwordValidation.length ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                      <span className={passwordValidation.length ? "text-green-600" : "text-red-500"}>8-20자 길이</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      {passwordValidation.hasNumber ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                      <span className={passwordValidation.hasNumber ? "text-green-600" : "text-red-500"}>
                        숫자 포함
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      {passwordValidation.hasLetter ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <X className="h-3 w-3 text-red-500" />
                      )}
                      <span className={passwordValidation.hasLetter ? "text-green-600" : "text-red-500"}>
                        영문자 포함
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  비밀번호 확인 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {formData.confirmPassword && (
                  <p
                    className={`text-xs ${
                      formData.password === formData.confirmPassword ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {formData.password === formData.confirmPassword
                      ? "비밀번호가 일치합니다"
                      : "비밀번호가 일치하지 않습니다"}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="membership" className="text-sm font-medium">
                  멤버십 선택 <span className="text-red-500">*</span>
                </label>
                <select
                  id="membership"
                  name="membership"
                  value={formData.membership}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                >
                  {membershipOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} - {option.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm">
                    <Link href="/terms" className="text-primary hover:underline">
                      이용약관
                    </Link>
                    에 동의합니다 <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm">
                    <Link href="/privacy" className="text-primary hover:underline">
                      개인정보처리방침
                    </Link>
                    에 동의합니다 <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="marketing"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="marketing" className="ml-2 text-sm">
                    마케팅 정보 수신에 동의합니다 (선택)
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={!isFormValid || isLoading}>
                {isLoading ? "회원가입 중..." : "회원가입"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                이미 계정이 있으신가요?{" "}
                <Link href="/auth/login" className="text-primary hover:underline font-medium">
                  로그인
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
