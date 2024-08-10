import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const search = req.query.search?.toString()
    const products = await prisma.products.findMany({
        where: {
            name: {
                contains: search
            }
        }
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: Error retrieving products" });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, name, rating, price, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        rating,
        price,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: Error creating product" });
  }
};