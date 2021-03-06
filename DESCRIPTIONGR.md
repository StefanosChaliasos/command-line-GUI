Γραφική διεπαφή για εντολές του Unix

Οι εντολές που προσφέρονται στη γραμμή εντολών του Unix είναι εξαιρετικά ισχυρές. Όμως η διαμόρφωσή τους με παραμέτρους είναι δύσκολη και απαιτεί συχνές αναφορές στην τεκμηρίωσή τους, διότι είναι δύσκολο κανείς να θυμάται τις διαθέσιμες παραμέτρους και τα ονόματά τους.

Στόχος της εργασίας είναι η δημιουργία μιας γραφικής διεπαφής για τη διαμόρφωση των παραμέτρων της κάθε εντολής. Αυτή θα εμφανίζει κατάλληλα ομαδοποιημένες και τεκμηριωμένες τις διαθέσιμες παραμέτρους, επιτρέποντας στο χρήστη να επιλέξει αυτές που χρειάζεται. Με βάση τις επιλογές του χρήστη, η διεπαφή θα σχηματίζει δυναμικά την εντολή με τη μορφή που πρέπει να εκτελεστεί.

Η γραφική διεπαφή θα διαμορφώνεται για κάθε εντολή βάσει ενός αρχείου διαμόρφωσης γραμμένου σε μια απλή γλώσσα εξειδικευμένου πεδίου (domain specific language) που θα περιγράφει ποιες είναι οι διαθέσιμες παράμετροι, τι κάνει η κάθε μία και πώς μπορούν να συνδυαστούν. Η αρχική μορφή του αρχείου αυτού θα μπορεί να δημιουργείται από τον πηγαίο κώδικα της εντολής και της τεκμηρίωσής της.
