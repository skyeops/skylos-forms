import * as yup from "yup";
import "lib/yup-phone";
import { CUSTOMER_TYPES } from "data";

const checkIfSenderRequiredTest = (value, context) => {
  const { customer } = context.from[1].value;

  if (
    [CUSTOMER_TYPES.$RECIPIENT, CUSTOMER_TYPES.$3RD_PARTY].includes(customer)
  ) {
    return Boolean(value);
  }

  return true;
};

const checkIfRecipientRequiredTest = (value, context) => {
  const { customer } = context.from[1].value;

  if (CUSTOMER_TYPES.$SENDER === customer) {
    return Boolean(value);
  }

  return true;
};

export const customerOrderSchema = yup.object().shape({
  allowDescription: yup.boolean(),
  chargeRecipient: yup.boolean(),
  payOnDelivery: yup.boolean(),
  customer: yup.string(),
  deliveryArea: yup.string().required("Delivery area is required"),
  description: yup.string(),
  items: yup
    .array()
    .min(1, "Please enter at least one item")
    .required("Item(s) are required"),
  recipient: yup.object().shape({
    address: yup.string().required("Address is required"),
    name: yup
      .string()
      .test("testname", "Name is required", checkIfRecipientRequiredTest),
    phoneNumber: yup
      .string()
      .phone()
      .test(
        "testname",
        "Phone number is required",
        checkIfRecipientRequiredTest
      ),
  }),
  sender: yup.object().shape({
    address: yup.string().required("Address is required"),
    name: yup
      .string()
      .test("testname", "Name is required", checkIfSenderRequiredTest),
    phoneNumber: yup
      .string()
      .phone()
      .test("testname", "Phone number is required", checkIfSenderRequiredTest),
    email: yup.string().email("Email is invalid"),
  }),
});