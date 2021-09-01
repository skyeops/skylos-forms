import React, { useCallback } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormError,
  FormGroup,
  Input,
  Label,
  Radio,
  Select,
  Stack,
  Switch,
  TagsInput,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryFee, PricePicker } from "components";
import { orderSchema } from "schemas";

export const CustomerOrderForm = ({
  buttonText,
  isLoading,
  onSubmit,
  pricelists,
  riders,
  schema,
  type,
}) => {
  const isAdmin = type === "admin";
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(
      schema || orderSchema({ isAdmin, requiredSender: false })
    ),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      customer: "sender",
      items: [],
      payOnDelivery: false,
      rider: "",
    },
  });

  const getPrice = useCallback((id) => pricelists.find((x) => x._id === id), [
    pricelists,
  ]);

  const showDescription = watch("allowDescription");
  const priceID = watch("deliveryArea");
  const selectedPrice = getPrice(priceID);

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="customer">
          {isAdmin ? "Customer is the?" : "You are the?"}
        </Label>

        <Controller
          control={control}
          name="customer"
          render={({ onChange, value }) => (
            <Stack direction="row" spacing={4}>
              <Card
                onClick={() => onChange("sender")}
                sx={{ boxShadow: "none" }}
              >
                <Radio title="Sender" active={value === "sender"} />
              </Card>

              <Card
                onClick={() => onChange("recipient")}
                sx={{ boxShadow: "none" }}
              >
                <Radio active={value === "recipient"} title="Receiver" />
              </Card>
            </Stack>
          )}
        />

        <FormError error={errors?.customer?.message} />
      </FormGroup>

      <Controller
        control={control}
        name="deliveryArea"
        render={({ onChange, value }) => (
          <PricePicker
            error={errors?.deliveryArea?.message}
            onChange={onChange}
            getPrice={getPrice}
            pricelists={pricelists}
            value={value}
          />
        )}
      />

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Input
          id="sender.address"
          name="sender.address"
          placeholder="Type Address"
          type="address"
          ref={register}
        />
        <FormError error={errors?.sender?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.address">Receiver Address</Label>
        <Input
          id="recipient.address"
          name="recipient.address"
          placeholder="Type Address"
          type="address"
          ref={register}
        />
        <FormError error={errors?.recipient?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="items">Item(s)</Label>
        <Controller
          control={control}
          name="items"
          render={({ onChange, value }) => (
            <TagsInput value={value} onChange={onChange} />
          )}
        />

        <FormError error={errors?.items?.message} />
      </FormGroup>

      <FormGroup>
        <Controller
          control={control}
          name="allowDescription"
          render={({ onChange, value }) => (
            <Checkbox
              active={value}
              onChange={onChange}
              title="Allow Description"
            />
          )}
        />
      </FormGroup>

      {showDescription ? (
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Type Name"
            ref={register}
            required={true}
          />
          <FormError error={errors?.description?.message} />
        </FormGroup>
      ) : null}

      <FormGroup>
        <Label htmlFor="recipient.name">Receiver Name</Label>
        <Input
          id="recipient.name"
          name="recipient.name"
          placeholder="Type Name"
          ref={register}
        />
        <FormError error={errors?.recipient?.name?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.phoneNumber">Receiver Number</Label>
        <Controller
          control={control}
          name="recipient.phoneNumber"
          render={(props) => (
            <Input
              id="recipient.phoneNumber"
              onlyCountries={["ng"]}
              type="phone"
              {...props}
            />
          )}
        />
        <FormError error={errors?.recipient?.phoneNumber?.message} />
      </FormGroup>

      {isAdmin ? (
        <>
          <FormGroup>
            <Label htmlFor="deliveryFee">Delivery Amount</Label>
            <Input
              id="deliveryFee"
              name="deliveryFee"
              placeholder="NGN"
              ref={register}
            />
            <FormError error={errors?.deliveryFee?.message} />
          </FormGroup>

          <FormGroup>
            <Controller
              control={control}
              name="payOnDelivery"
              render={({ onChange, value }) => (
                <Switch
                  active={value}
                  onChange={onChange}
                  title="The item will be paid for on delivery"
                />
              )}
            />
          </FormGroup>
        </>
      ) : null}

      <FormGroup>
        <Controller
          control={control}
          name="chargeRecipient"
          render={({ onChange, value }) => (
            <Switch
              active={value}
              onChange={onChange}
              title="The Receiver will be paying for delivery"
            />
          )}
        />
      </FormGroup>

      {isAdmin ? (
        <FormGroup>
          <Label htmlFor="rider">Assign Rider</Label>
          <Select
            id="rider"
            name="rider"
            placeholder="Select option"
            ref={register}
          >
            <option value="" disabled>
              Select Option
            </option>

            {riders?.map((rider) => (
              <option key={rider.id} value={rider.id}>
                {rider.name}
              </option>
            ))}
          </Select>
          <FormError error={errors?.rider?.message} />
        </FormGroup>
      ) : (
        <DeliveryFee amount={selectedPrice?.amount} />
      )}

      <Button
        defaultRightIcon
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        {buttonText}
      </Button>
    </Stack>
  );
};

CustomerOrderForm.defaultProps = {
  buttonText: "Submit Request",
  isLoading: false,
  onSubmit: () => {},
  pricelists: [],
  riders: [],
  schema: null,
  type: "client",
};
