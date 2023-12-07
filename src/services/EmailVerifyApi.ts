import RtkQueryService from './RtkQueryService';

const emailVerifyApi = RtkQueryService.injectEndpoints({
  endpoints: (build) => ({
    getJobsById: build.query({
      query: (id) => `/bulk/job/results/${id}`,
      providesTags: ['EmailVerify'],
    }),

    createNewJob: build.mutation({
      query(body) {
        return {
          url: `/bulk/job/create`,
          method: 'POST',
          body: JSON.stringify(body),
        };
      },
    }),

    startJobById: build.mutation({
      query: (id) => ({
        url: `/bulk/job/start/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['EmailVerify'],
    }),

    createJobCSV: build.mutation({
      query(body) {
        return {
          url: `/bulk/job/create/from/csv`,
          method: 'POST',
          body: JSON.stringify(body),
        };
      },
      invalidatesTags: ['EmailVerify'],
    }),

    getSingleJobVerify: build.query({
      query: (id) => `/v1/${id}/verification`,
      providesTags: ['EmailVerify'],
    }),

    checkJobStatus: build.query({
      query: (id) => `/bulk/job/status/${id}`,
      providesTags: ['EmailVerify'],
    }),

    exportJobCSV: build.query({
      query: (id) => `/bulk/job/export/csv/${id}`,
      providesTags: ['EmailVerify'],
    }),

    downloadExportJobCSV: build.query({
      query: (id) => `/bulk/job/download/csv/export/${id}`,
      providesTags: ['EmailVerify'],
    }),
  }),
});

export const {
  useGetJobsByIdQuery,
  useCreateNewJobMutation,
  useStartJobByIdMutation,
  useGetSingleJobVerifyQuery,
  useCheckJobStatusQuery,
  useExportJobCSVQuery,
  useDownloadExportJobCSVQuery,
  useCreateJobCSVMutation,
} = emailVerifyApi;
