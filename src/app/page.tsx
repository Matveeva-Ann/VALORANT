import React from 'react';
import '@mantine/core/styles.css';
import Banner from './components/Banner';
import Table from './components/Table';

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Table></Table>
    </main>
  );
}
