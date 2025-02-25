import React from "react";
import { List, Typography, ListItem, ListItemText} from "@mui/material";
    const products = [
        { 
            name: "Professional Plan", 
            desc: "Monthly subscription",
            price: "$29.99",
        },
        { 
            name: "Dedicated support", 
            desc: "Included in the Professional plan",
            price: "Free",
        },
        { 
            name: "Hardware", 
            desc: "Devices needed for development",
            price: "$69.99",
        },

        { 
            name: "Landing page template", 
            desc: "License",
            price: "$49.99",
        },
    ];
    interface InfoProps {
        totalPrice: string;
    }
    export default function Info({ totalPrice }: InfoProps) {
    return (
        <>
        <Typography variant="subtitle2" gutterBottom>
            Totel
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
           {totalPrice}
            </Typography>
            <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
        </>
    );
}