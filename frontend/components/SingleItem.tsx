// TODO: remove ignores!
/* eslint-disable */
// @ts-nocheck
import { FC } from "react";
import Link from "next/link";
import { Edit } from "react-ikonate";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";

import { useItemQuery } from "../graphql/generated/graphql";
import formatMoney from "../utils/formatMoney";
import { Title, PriceTag } from "./styles";
import DeleteItem from "./DeleteItem";
import ItemActions from "./ItemActions";

const Container = styled.div`
  box-shadow: ${({ theme }) => theme.bs};
  display: grid;
  margin: 2rem auto;
  grid-template-columns: 2fr 1fr;
`;

const Details = styled.div`
  font-size: 2rem;
  margin: 3rem;
`;

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Stretch = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const SingleItem: FC = () => {
  const router = useRouter();
  const { itemId } = router.query;
  const { data, loading } = useItemQuery({
    variables: { id: itemId as string },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>No item was found</div>;
  }

  const { id, price, title, image, description } = data.item;

  return (
    <Container>
      <Head>
        <title>unAware | {title}</title>
      </Head>
      {image && <Img alt={title} src={image} />}
      <Details>
        <h2>Viewing {title}</h2>
        <p>{description}</p>
      </Details>
      <Stretch>
        <ItemActions id={id} title={title} />
      </Stretch>
    </Container>
  );
};

export default SingleItem;
