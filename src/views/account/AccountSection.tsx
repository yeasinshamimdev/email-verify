import UserCommonBox from '@/components/layouts/UserLayout/UserCommonBox';
import { FormContainer, FormItem, Input, Select } from '@/components/ui';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { CurrencyTooltip } from '@/constants/common.tooltip.constant';
import { countryList } from '@/constants/countries.constant';
import { currencyOptions } from '@/constants/list.dropdown';
import { accountFormSchema } from '@/constants/validation';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';

type FormModel = {
  select: string;
};

const AccountSection = () => {
  const [formValue, setFormValue] = useState({
    companyName: '',
    TaxID: '',
    TaxIdNumber: '',
    currency: 'USD',
    AddressLine1: '',
    AddressLine2: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
  });

  const handleSubmit = (values: any, setSubmitting: any) => {
    console.log(values);
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <UserCommonBox header={{ title: 'Account' }}>
        <div className="">
          <Formik
            initialValues={formValue}
            validationSchema={accountFormSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values, setSubmitting);
            }}
          >
            {({ values, touched, errors }) => (
              <Form>
                <FormContainer>
                  <div className="flex gap-4 w-full p-6">
                    <div className="w-full">
                      <h5 className="mb-4 text-base">General</h5>
                      <div className="flex flex-col">
                        <FormItem
                          asterisk
                          label="Company Name"
                          invalid={errors.companyName && touched.companyName}
                          errorMessage={errors.companyName}
                          className="w-full text-gray-800"
                        >
                          <Field
                            autoComplete="off"
                            type="text"
                            name="companyName"
                            placeholder="company name"
                            component={Input}
                          />
                        </FormItem>
                        <div className="flex items-end gap-4">
                          <FormItem
                            asterisk
                            label="Tax ID"
                            invalid={errors.TaxID && touched.TaxID}
                            errorMessage={errors.TaxID}
                            className="w-full text-gray-800"
                          >
                            <Field name="TaxID">
                              {({ field, form }: FieldProps<FormModel>) => (
                                <Select
                                  field={field}
                                  form={form}
                                  options={countryList}
                                  value={countryList.filter(
                                    (option) => option.value === values.TaxID
                                  )}
                                  onChange={(option) =>
                                    form.setFieldValue(
                                      field.name,
                                      option?.value
                                    )
                                  }
                                />
                              )}
                            </Field>
                          </FormItem>
                          <FormItem
                            invalid={errors.TaxIdNumber && touched.TaxIdNumber}
                            errorMessage={errors.TaxIdNumber}
                            className="w-full text-gray-800"
                          >
                            <Field
                              type="text"
                              name="TaxIdNumber"
                              placeholder="012548763547"
                              component={Input}
                            />
                          </FormItem>
                        </div>
                        <FormItem
                          asterisk
                          label="Currency"
                          extra={<CurrencyTooltip />}
                          className="w-full text-gray-800 mb-0"
                          invalid={errors.currency && touched.currency}
                          errorMessage={errors.currency}
                        >
                          <Field name="currency">
                            {({ field, form }: FieldProps<FormModel>) => (
                              <Select
                                field={field}
                                form={form}
                                isDisabled={true}
                                options={currencyOptions}
                                value={currencyOptions.filter(
                                  (option) => option.value === values.currency
                                )}
                                onChange={(option) =>
                                  form.setFieldValue(field.name, option?.value)
                                }
                              />
                            )}
                          </Field>
                        </FormItem>
                      </div>
                    </div>
                    <div className="w-full">
                      <h5 className="mb-4 text-base">Billing Information</h5>
                      <div className="flex flex-col ">
                        <FormItem
                          asterisk
                          label="Address Line 1"
                          invalid={errors.AddressLine1 && touched.AddressLine1}
                          errorMessage={errors.AddressLine1}
                          className="w-full text-gray-800"
                        >
                          <Field
                            autoComplete="off"
                            type="text"
                            name="AddressLine1"
                            placeholder="enter address line 1"
                            component={Input}
                          />
                        </FormItem>
                        <FormItem
                          label="Address Line 2"
                          className="w-full text-gray-800"
                        >
                          <Field
                            autoComplete="off"
                            type="text"
                            name="AddressLine2"
                            placeholder="apt, suite, building (optional)"
                            component={Input}
                          />
                        </FormItem>
                        <FormItem
                          asterisk
                          label="City"
                          invalid={errors.city && touched.city}
                          errorMessage={errors.city}
                          className="w-full text-gray-800"
                        >
                          <Field
                            autoComplete="off"
                            type="text"
                            name="city"
                            placeholder="enter city name"
                            component={Input}
                          />
                        </FormItem>
                        <FormItem
                          asterisk
                          label="Country"
                          invalid={errors.country && touched.country}
                          errorMessage={errors.country}
                          className="w-full text-gray-800"
                        >
                          <Field name="country">
                            {({ field, form }: FieldProps<FormModel>) => (
                              <Select
                                field={field}
                                form={form}
                                options={countryList}
                                value={countryList.filter(
                                  (option) => option.value === values.country
                                )}
                                onChange={(option) =>
                                  form.setFieldValue(field.name, option?.value)
                                }
                              />
                            )}
                          </Field>
                        </FormItem>
                        <div className="flex items-end gap-4">
                          <FormItem
                            asterisk
                            label="State / Region"
                            invalid={errors.state && touched.state}
                            errorMessage={errors.state}
                            className="w-2/3 text-gray-800"
                          >
                            <Field
                              autoComplete="off"
                              type="text"
                              name="state"
                              placeholder="Enter state / region name"
                              component={Input}
                            />
                          </FormItem>
                          <FormItem
                            asterisk
                            label="Postal Code"
                            invalid={errors.postalCode && touched.postalCode}
                            errorMessage={errors.postalCode}
                            className="w-1/3 text-gray-800"
                          >
                            <Field
                              type="text"
                              name="postalCode"
                              placeholder="1000"
                              component={Input}
                            />
                          </FormItem>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FormItem>
                    <div
                      style={{
                        borderTop: '1px solid rgba(100, 100, 200, 0.15)',
                      }}
                      className="py-4 px-6 flex justify-end"
                    >
                      <PrimaryButton type="submit">SAVE</PrimaryButton>
                    </div>
                  </FormItem>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </div>
      </UserCommonBox>
    </>
  );
};

export default AccountSection;
