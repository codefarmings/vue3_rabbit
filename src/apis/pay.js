import http from "@/utils/http";

export function getOrderAPI(id) {
  return http({
    url: `/member/order/${id}`,
  });
}
