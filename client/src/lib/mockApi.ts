// Mock API для тестирования в разработке
export const mockSubmitApplication = async (data: any) => {
  // Имитируем задержку сети
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Симулируем успешный ответ
  return {
    ok: true,
    status: 200,
    json: async () => ({
      message: "Application submitted successfully",
      type: "full"
    })
  };
};
