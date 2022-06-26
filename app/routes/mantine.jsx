import { Text, Group, Button, Notification } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useModals } from '@mantine/modals';

export default function Mantine() {
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
        <h1>Mantine</h1>
        
        <h2>Buttons</h2>
        <Button>Hello world!</Button>
        
        <h2>Notifications</h2>
        <Notification title="We notify you that">
        You are now obligated to give a star to Mantine project on GitHub
        </Notification>

        <h3>Show notification toast</h3>
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

        <h2>Modals</h2>
        <Button onClick={openConfirmModal}>Open confirm modal</Button>
      </>
    );
  }
  