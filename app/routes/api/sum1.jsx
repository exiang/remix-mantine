import { json, ActionFunction } from "@remix-run/node";

// acquired payload from POST using action
export let action = async ({ request }) => {
  
  const formData = await request.formData();

  const num1 = Number(formData.get("num1")) ?? 0;
  const num2 = Number(formData.get("num2")) ?? 0;
  const total = num1+num2;

  return json(
    {'status':'success', 'data':{'num1': num1, 'num2':num2, 'total':total}}
  );
};