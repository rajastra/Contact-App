/*
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);

*/
import * as Contacts from "expo-contacts";
import { contactActions } from "./contact-slice";

export const fetchContacts = () => {
  return async (dispatch) => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        return data;
      }
    };
    const contacts = await fetchContacts();
    dispatch(contactActions.replaceContacts(contacts || []));
  };
};
