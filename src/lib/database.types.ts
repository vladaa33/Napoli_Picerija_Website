export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          display_order: number
          is_active: boolean
          image_url: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          display_order?: number
          is_active?: boolean
          image_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          display_order?: number
          is_active?: boolean
          image_url?: string
          created_at?: string
        }
      }
      menu_items: {
        Row: {
          id: string
          category_id: string
          name: string
          description: string
          price: number
          image_url: string
          is_available: boolean
          is_featured: boolean
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category_id: string
          name: string
          description?: string
          price: number
          image_url?: string
          is_available?: boolean
          is_featured?: boolean
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category_id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string
          is_available?: boolean
          is_featured?: boolean
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string
          address: string
          city: string
          postal_code: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone: string
          address?: string
          city?: string
          postal_code?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string
          address?: string
          city?: string
          postal_code?: string
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          customer_id: string | null
          order_number: string
          status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'completed' | 'cancelled'
          total_amount: number
          delivery_address: string
          customer_notes: string
          payment_status: 'pending' | 'paid' | 'failed'
          payment_method: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id?: string | null
          order_number?: string
          status?: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'completed' | 'cancelled'
          total_amount: number
          delivery_address: string
          customer_notes?: string
          payment_status?: 'pending' | 'paid' | 'failed'
          payment_method?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string | null
          order_number?: string
          status?: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'completed' | 'cancelled'
          total_amount?: number
          delivery_address?: string
          customer_notes?: string
          payment_status?: 'pending' | 'paid' | 'failed'
          payment_method?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_item_id: string
          quantity: number
          unit_price: number
          subtotal: number
          special_instructions: string
        }
        Insert: {
          id?: string
          order_id: string
          menu_item_id: string
          quantity: number
          unit_price: number
          subtotal: number
          special_instructions?: string
        }
        Update: {
          id?: string
          order_id?: string
          menu_item_id?: string
          quantity?: number
          unit_price?: number
          subtotal?: number
          special_instructions?: string
        }
      }
      menu_item_sizes: {
        Row: {
          id: string
          menu_item_id: string
          size_name: string
          price: number
          is_available: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          menu_item_id: string
          size_name: string
          price: number
          is_available?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          menu_item_id?: string
          size_name?: string
          price?: number
          is_available?: boolean
          display_order?: number
          created_at?: string
        }
      }
    }
  }
}
