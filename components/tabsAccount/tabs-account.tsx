'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

export const TabsAccount = () => {
  const tabs = [
    {
      id: 'account',
      label: 'Account',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'orders',
      label: 'Orders',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        height: '50vh',
        backgroundColor: '#171717'
      }}
    >
      <Card className="max-w-[400px]">
        <CardBody>
          <Tabs aria-label="Dynamic tabs" items={tabs}>
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
