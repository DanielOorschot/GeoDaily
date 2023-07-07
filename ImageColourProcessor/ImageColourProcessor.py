
if __name__ == '__main__':
    from PIL import Image

    with Image.open("Andorra.png") as im:
        imrgb = im.convert('RGB')
        colour_list = imrgb.getcolors()
        colour_list.sort(reverse=True)
        num_pixels = imrgb.size[0] * imrgb.size[1]
        print(num_pixels)
        final_list = []
        for i in range(len(colour_list)):
            #threshold for colour inclusion needs adjusting
            if colour_list[i][0] > (num_pixels/20):
                final_list.append(colour_list[i])
        print(final_list)


    
    
