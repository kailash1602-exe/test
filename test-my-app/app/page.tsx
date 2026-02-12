import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    </>
  );
}

// routes
/*
1. components
    1. account
    2. advertiser
    3. advertiser-campaign-exec
    4. advertiser-compliance
    5. advertiser- creative
    6. advertiser-finance
    7. advertiser-marketing
    8. advertiser-marketing-manager
    9. advertiser-performance
    10. auth
    11. campaign-executive
    12. cards
    13. compliance
    14. creative
    15. figma
    16. finance
    17. marketing
    18. marketing-manager
    19. modals
    20. performance-analyst
    21. tables
    22. ui
    23. billingCompliance.tsx
    24. Budget.tsx
    25. Campaign.tsx
    26. Header.tsx
    27. Navigation.tsx
    28. NotificationsPanel.tsx
    29. Overview.tsx
    30. Publishers.tsx
    31. QuickActionBar.tsx
    32.QuickStarsRow.tsx
    33. RoleAccessHub.tsx
    34. Team.tsx

2. data
    account, finance, creative, compliance, performance, marketing


CONCLUSION: there are two files
1. components
2. data

i need to create a new folder named structure so that routes can be managed properly.

Currently, due to if else condition, the code is not scalable and maintainable. Also,
code is working on if-else conditon on one single route localhost:3000 only.

What to do?
need to create folder based routes, such that a user can access dashboard according to their 
roles,


first there is the page where all the 18 roles are visible and after clicking on any role, 
user should be redirected to the dashboard of that role and their pages have already been 
created.

localhost:3000/roles/account-owner {it should be like that but professional}

*/