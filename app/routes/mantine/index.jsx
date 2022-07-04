import { Title, Space, Text, Group, Button, Notification } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useModals } from '@mantine/modals';

export default function MantineIndex() {
    const modals = useModals();

    const openConfirmModal = () => modals.openConfirmModal({
        title: 'Please confirm your action',
        children: (
        <Text size="sm">
            This action is so important that you are required to confirm it with a modal. Please click
            one of these buttons to proceed.
        </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });
    
    return (
      <>
        <Title order={1}>Mantine</Title>
        <Space h="lg" />

        <Title order={2}>Buttons</Title>
        <Button>Hello world!</Button>
        
        <Space h="lg" />
        
        <Title order={2}>Noitification</Title>
        <Notification title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
        </Notification>

        <Space h="sm" />

        <Title order={3}>Trigger Notification Toast</Title>
        <Button
            variant="outline"
            onClick={() =>
            showNotification({
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
            })
            }
        >
            Show notification
        </Button>

        <Space h="lg" />

        <Title order={2}>Modals</Title>
        <Button onClick={openConfirmModal}>Open confirm modal</Button>
      </>
    );
  }
  