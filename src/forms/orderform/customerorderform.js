import React, { useCallback } from "react";
import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormError,
  FormGroup,
  Input,
  Label,
  Radio,
  Stack,
  Switch,
  Textarea,
} from "skylos-ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeliveryFee, PricePicker } from "components";
import { CUSTOMER_TYPES } from "data";
import { customerOrderSchema } from "schemas";

const cardStyles = {
  boxShadow: "none",
  flexShrink: 0,
  mb: 4,
  mr: 4,
};

export const CustomerOrderForm = ({
  buttonText,
  disablePayOnDelivery,
  isLoading,
  onSubmit,
  pricelists,
  schema,
}) => {
  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(schema || customerOrderSchema(false)),
    defaultValues: {
      allowDescription: false,
      chargeRecipient: false,
      requestedBy: "sender",
      items: "",
      rider: "",
    },
  });

  const getPrice = useCallback((id) => pricelists.find((x) => x._id === id), [
    pricelists,
  ]);

  const showDescription = watch("allowDescription");
  const priceID = watch("deliveryArea");
  const requestedBy = watch("requestedBy");
  const selectedPrice = getPrice(priceID);

  const senderFields = () => {
    return (
      <>
        <FormGroup>
          <Label htmlFor="sender.name">Sender Name</Label>
          <Input
            key="sender.name"
            id="sender.name"
            name="sender.name"
            placeholder="Type Name"
            ref={register}
          />
          <FormError error={errors?.sender?.name?.message} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="sender.phoneNumber">Sender Number</Label>
          <Controller
            key="control.sender.phoneNumber"
            control={control}
            name="sender.phoneNumber"
            render={({ onChange, value, ...inputProps }) => (
              <Input
                id="sender.phoneNumber"
                type="phone"
                onChange={(...args) => onChange(args)}
                {...(value ? { value: value[0] } : {})}
                {...inputProps}
              />
            )}
          />
          <FormError error={errors?.sender?.phoneNumber?.message} />
        </FormGroup>
      </>
    );
  };

  return (
    <Stack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="requestedBy">You are the?</Label>

        <Controller
          control={control}
          name="requestedBy"
          render={({ onChange, value }) => (
            <Flex flexDirection="row" flexWrap="wrap" mb={-4}>
              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$SENDER)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$SENDER}
                  title="Sender"
                />
              </Card>

              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$RECIPIENT)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$RECIPIENT}
                  title="Receiver"
                />
              </Card>

              <Card
                onClick={() => onChange(CUSTOMER_TYPES.$3RD_PARTY)}
                sx={cardStyles}
              >
                <Radio
                  active={value === CUSTOMER_TYPES.$3RD_PARTY}
                  title="3rd Party"
                />
              </Card>
            </Flex>
          )}
        />

        <FormError error={errors?.requestedBy?.message} />
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

      {requestedBy === CUSTOMER_TYPES.$3RD_PARTY ? senderFields() : null}

      <FormGroup>
        <Label htmlFor="sender.address">Pick Up Address</Label>
        <Controller
          control={control}
          name="sender.address"
          render={(field) => {
            return (
              <Input
                id="sender.address"
                type="address"
                name="sender.address"
                placeholder="Type Address"
                {...field}
              />
            );
          }}
        />
        <FormError error={errors?.sender?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="recipient.address">Receiver Address</Label>
        <Controller
          control={control}
          name="recipient.address"
          render={(field) => {
            return (
              <Input
                id="recipient.address"
                type="address"
                name="recipient.address"
                placeholder="Type Address"
                {...field}
              />
            );
          }}
        />
        <FormError error={errors?.recipient?.address?.message} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="items">Item(s)</Label>
        <Input
          key="items"
          id="items"
          name="items"
          placeholder="Separate with commas"
          ref={register}
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

      {requestedBy === CUSTOMER_TYPES.$RECIPIENT ? (
        senderFields()
      ) : (
        <>
          <FormGroup>
            <Label htmlFor="recipient.name">Receiver Name</Label>
            <Input
              key="recipient.name"
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
              key="control.recipient.phoneNumber"
              name="recipient.phoneNumber"
              render={({ onChange, value, ...inputProps }) => (
                <Input
                  id="recipient.phoneNumber"
                  type="phone"
                  onChange={(...args) => onChange(args)}
                  {...(value ? { value: value[0] } : {})}
                  {...inputProps}
                />
              )}
            />
            <FormError error={errors?.recipient?.phoneNumber?.message} />
          </FormGroup>
        </>
      )}

      <FormGroup>
        <Controller
          control={control}
          name="chargeRecipient"
          render={({ onChange, value }) => (
            <>
              {disablePayOnDelivery ? null : (
                <Switch
                  active={value}
                  onChange={onChange}
                  title={"Payment on delivery"}
                />
              )}
            </>
          )}
        />
      </FormGroup>

      <DeliveryFee amount={selectedPrice?.amount} />

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
  disablePayOnDelivery: false,
  isLoading: false,
  onSubmit: () => {},
  pricelists: [],
  schema: null,
};
