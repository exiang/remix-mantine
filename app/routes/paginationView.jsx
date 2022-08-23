import {Link,  useLoaderData, useFetcher, useParams}  from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useState, useEffect } from 'react';
import { Pagination } from '@mantine/core';
import { Title, List, Button, Space, Table, LoadingOverlay, Box, Avatar, ActionIcon, Group } from '@mantine/core';
import { Eye, Edit, Trash } from "tabler-icons-react";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page")? Number(url.searchParams.get("page")) : 1;

  return json({'page': page});
}

//const result = await fetch(,  {method: 'GET'}).then(result => result.json());
//console.log('result:', result);

export default function PaginationView(){
  const loaderData = useLoaderData();
  const fetcher = useFetcher();

  const [activePage, setActivePage] = useState(loaderData.page ?? 1);
  const [totalPage, setTotalPage] = useState();
  const [users, setUsers] = useState();
  

  useEffect(async () => {
    const result = await fetch(`https://reqres.in/api/users?page=${activePage}`,  {method: 'GET'})
    .then((response) => response.json())
    .then((json) => {
      if (json.data.length === 0) {
        setUsers(null);
      } else {
        setUsers(json.data);
        setTotalPage(json.total_pages);
      }
    });
    
  }, [activePage]);
  
  return (<>
      <Table striped style={{marginBottom:"1rem"}}>
        <thead>
          <tr>
            <th style={{}}>ID</th>
            <th style={{}}></th>
            <th style={{}}>Name</th>
            <th>Email</th>
            <th style={{textAlign: 'center'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(element => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td> <Avatar src={element.avatar} alt="Avatar" /></td>
              <td style={{ textAlign: 'start', verticalAlign: 'top' }}>{element.first_name} {element.last_name}</td>
              <td style={{ textAlign: 'start', verticalAlign: 'top' }}>{element.email}</td>
              <td style={{textAlign: 'center'}}>
                <Group position="center" spacing="xs">
                <ActionIcon
                    variant="default"
                    radius="xs"
                    size={24}
                  ><Eye size={16} /></ActionIcon>
                  <ActionIcon
                    variant="default"
                    radius="xs"
                    size={24}
                  ><Edit size={16} /></ActionIcon>
                  <ActionIcon
                    variant="default"
                    radius="xs"
                    size={24}
                  ><Trash size={16} /></ActionIcon>
                  </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination page={activePage} onChange={setActivePage} total={totalPage} />

  </>);
}