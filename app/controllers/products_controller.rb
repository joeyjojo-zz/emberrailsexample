class ProductsController < ApplicationController
  # GET /products.json
  def index
    render json: Product.all
  end

  # GET /products/1.json
  def show
    product = Product.find(params[:id])
    render json: product
  end

  # POST /products.json
  def create
    product = Product.new
    if update_product(product)
      render json: product, status: :created
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  # PUT /products/1.json
  def update
    product = Product.find(params[:id])
    if update_product(contact)
      render json: product, status: :ok
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1.json
  def destroy
    product = Product.find(params[:id])
    product.destroy
    render json: nil, status: :ok
  end

private

  def permitted_params
    params.require(:product).permit(:title,
                                    :description,
                                    :image_url,
                                    :price)
  end

  def update_product(contact)
    product_params = permitted_params

    # Because updates to the contact and its associations should be atomic,
    # wrap them in a transaction.
    Product.transaction do
      # Update the contact's own attributes first.
      product.attributes = product_params
      product.save!
    end

    # Important! Reload the contact to ensure that changes to its associations
    # (i.e. phone numbers) will be serialized correctly.
    product.reload

    return true
  rescue
    return false
  end
end
