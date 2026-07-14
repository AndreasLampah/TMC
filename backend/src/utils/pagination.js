export const paginationService = (page = 1, limit = 30, totalData = 0) => {
  const currentPage = Math.max(Number(page), 1);

  const perPage = Math.min(Number(limit), 100);

  const skip = (currentPage - 1) * perPage;

  const totalPage = Math.ceil(totalData / perPage);

  return {
    skip,
    take: perPage,
    pagination: {
      currentPage,
      limit: perPage,
      totalData,
      totalPage,
    },
  };
};
