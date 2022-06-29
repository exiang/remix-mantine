import { json, LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useParams } from "@remix-run/react";

export let loader: LoaderFunction = async ({ request }) => {
  
  const url = new URL(request.url);
  const num1 = Number(url.searchParams.get("num1")) ?? 0;
  const num2 = Number(url.searchParams.get("num2")) ?? 0;
  const total = num1+num2;

  return json(
    {'status':'success', 'data':{'num1': num1, 'num2':num2, 'total':total}}
  );
}